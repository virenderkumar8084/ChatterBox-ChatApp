import { Add as AddIcon, Delete as DeleteIcon, Done as DoneIcon, Edit as EditIcon, KeyboardBackspace as KeyboardBackspaceIcon, Menu as MenuIcon } from "@mui/icons-material";
import { Backdrop, Box, Button, CircularProgress, Drawer, Grid, IconButton, Stack, TextField, Tooltip, Typography } from '@mui/material';
import React, { lazy, memo, Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from 'react-router-dom';
import { LayoutLoader } from "../components/layout/Loaders.jsx";
import AvatarCard from "../components/shared/AvatarCard";
import UserItem from "../components/shared/UserItem.jsx";
import { Link } from "../components/styles/StyledComponent.jsx";
import { bgGradient, matBlack } from '../constants/color';
import { useAsyncMutation, useErrors } from "../hooks/hook.jsx";
import { useChatDetailsQuery, useDeleteChatMutation, useMyGroupsQuery, useRemoveGroupMemberMutation, useRenameGroupMutation } from "../redux/api/api.js";
import { setIsAddMember } from "../redux/reducers/misc.js";


const ConfirmDeleteDialog = lazy(() => import("../components/dialogs/ConfirmDeleteDialog.jsx"))
const AddMemberDialog = lazy(() => import("../components/dialogs/AddMemberDialog.jsx"))

const Groups = () => {
  const chatId = useSearchParams()[0].get("group");
  const navigate = useNavigate();
  const {isAddMember} = useSelector(state => state.misc);
  const dispatch = useDispatch();
  const myGroups = useMyGroupsQuery("");
  const groupDetails = useChatDetailsQuery({ chatId, populate: true }, { skip: !chatId });
  const [updateGroup, isLoadingGroupName] = useAsyncMutation(useRenameGroupMutation);
  const [removeMember, isLoadingRemoveMember] = useAsyncMutation(useRemoveGroupMemberMutation);
  const [deleteGroup, isLoadingDeleteGroup] = useAsyncMutation(useDeleteChatMutation);


  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [groupNameUpdatedValue, setGroupNameUpdatedValue] = useState("");
  const [confirmDeleteDialog, setConfirmDeleteDialog] = useState(false);
  const [members, setMembers] = useState([]);

  const errors = [
    {
      isError: myGroups.isError,
      error: myGroups.error,
    },
    {
      isError: groupDetails.isError,
      error: groupDetails.error,
    },
  ];

  useErrors(errors);

  useEffect(() => {
    const groupData = groupDetails.data;
    if (groupData) {
      setGroupName(groupData.chat.name);
      setGroupNameUpdatedValue(groupData.chat.name);
      setMembers(groupData.chat.members);
    }

    return () => {
      setGroupName("");
      setGroupNameUpdatedValue("");
      setMembers([]);
      setIsEdit(false);
    };
  }, [groupDetails.data]);

  const navigateBack = () => { navigate("/") }

  const handleMobile = () => { 
    setIsMobileMenuOpen((prev) => !prev);
  };
  const handleMobileClose = () => { 
    setIsMobileMenuOpen(false);
  };
  const updateGroupName = () => {
    setIsEdit(false);
    updateGroup("Updating Group Name...", {
      chatId,
      name: groupNameUpdatedValue,
    });
  };
  useEffect(() => {
    if (chatId) {
      setGroupName(`Group Name ${chatId}`);
      setGroupNameUpdatedValue(`Group Name ${chatId}`);
    } else {
      setGroupName("");
      setGroupNameUpdatedValue("");
      setIsEdit(false);
    }
  }, [chatId]);
  const openAddMemberHandler = () => {
    dispatch(setIsAddMember(true));
  };
  const openConfirmDeleteHandler = () => {
    setConfirmDeleteDialog(true);
  };
  const closeConfirmDeleteHandler = () => {
    setConfirmDeleteDialog(false);
  };
  const deleteHandler = () => {
    deleteGroup("Deleting Group....", chatId);
    closeConfirmDeleteHandler();
    navigate("/group");
   };
  const removeMemberHandler = (userId) => {
    removeMember("Removing Member...", { chatId, userId });
  };
  const IconBtns = <>
    <Box sx={{
      display: { xs: "block", sm: "none", position: "fixed", right: "1rem", top: "1rem"},
    }}>
      <IconButton onClick={handleMobile}>
        <MenuIcon/>
      </IconButton>
    </Box>
    <Tooltip title="back">
      <IconButton sx={{
        position: "absolute", top: "2rem", left: "2rem", bgcolor: matBlack, color: "white", ":hover": {
          bgcolor: "rgba(0,0,0,0.5)"
        }}} onClick={navigateBack}>
        <KeyboardBackspaceIcon/>
      </IconButton>
    </Tooltip>
  </>;
  const GroupName =
    <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} spacing={"1rem"} padding={"3rem"}>
    {
        isEdit ?
          (
            <>
              <TextField value={groupNameUpdatedValue} onChange={(e)=>setGroupNameUpdatedValue(e.target.value)}/>
              <IconButton onClick={updateGroupName} disabled={isLoadingGroupName}>
                <DoneIcon></DoneIcon>
              </IconButton>
            </>
          )
          : (
        <>
          <Typography variant="h4">
            {groupName}
          </Typography>
          <IconButton disabled={isLoadingGroupName} onClick={() => setIsEdit(true)}>
            <EditIcon></EditIcon>
          </IconButton>
        </>
      )
    }
    </Stack>;
  const ButtonGroup =
    <Stack
      direction={{
        sm: "row",
        xs: "column-reverse"
      }}
      spacing={"1rem"}
      p={{
        sm: "1rem",
        xs: "0",
        md: "1rem 4rem"
      }}
    >
      <Button size="large" color="error" startIcon={<DeleteIcon/>} onClick={openConfirmDeleteHandler}>Delete Group</Button>
      <Button size="large" variant="contained" startIcon={<AddIcon/>} onClick={openAddMemberHandler}>Add Member</Button>
    </Stack>;
  return myGroups.isLoading ? <LayoutLoader></LayoutLoader> : (
    <Grid container height={"100vh"}>
      <Grid item sx={{display: {xs: "none", sm: "block",}}} sm={4}>
      <GroupsList myGroups={myGroups?.data?.groups} chatId={chatId}/>
      </Grid>
      <Grid item xs={12} sm={8} sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        padding: "1rem 3rem"
      }}>
        {IconBtns}
        {groupName &&
          (<>
          {GroupName}
          <Typography margin={"2rem"} alignSelf={"flex-start"} variant="body1">
            Members
          </Typography>
          <Stack
            maxWidth={"45rem"}
            width={"100%"}
            boxSizing={"border-box"}
            padding={{
              sm: "1rem",
              xs: "0",
              md: "1rem 4rem"
            }}
            spacing={"2rem"}
            // bgcolor={"bisque"}
            height={"50vh"}
            overflow={"auto"}
          >
            {/* {Members} */}
            {
              isLoadingRemoveMember ? <CircularProgress/> : members.map((i) => (<UserItem user={i} key={i._id} isAdded styling={{
                boxShadow: "0 0 0.5rem rgba(0,0,0,0.2)",
                padding: "1rem 2rem",
                borderRadius: "1rem"
              }}handler={removeMemberHandler} />))
            }
          </Stack>
          {ButtonGroup}
          </>)
        }
      </Grid>
      {
        isAddMember &&
        (
          <Suspense fallback={<Backdrop open />}>
            <AddMemberDialog chatId={chatId}/>
          </Suspense>
        )
      }
      {
        confirmDeleteDialog && <Suspense
          fallback={<Backdrop open />}><ConfirmDeleteDialog open={ConfirmDeleteDialog}
          handleClose={closeConfirmDeleteHandler} deleteHandler={deleteHandler}/>
        </Suspense>
      }
      <Drawer sx={{
        display:{xs: "block", sm: "none"}
      }} open={isMobileMenuOpen} onClose={handleMobileClose}><GroupsList w={"50vw"} />
        <GroupsList w={"50vw"} myGroups={myGroups?.data?.groups} chatId={chatId}/>
      </Drawer>
    </Grid>
  )
}

const GroupsList = ({ w = "100%", myGroups = [], chatId }) => (
  <Stack spacing={2} sx={{ padding: '1rem', backgroundImage: bgGradient, height: "100vh", overflow:"auto"}} width={w} >
    {
      myGroups.length > 0 ? (myGroups.map((group) => <GroupsListItem group={group} chatId={chatId} key={group._id} />)) : (<Typography textAlign={"center"} padding="1rem">No Groups</Typography>)
    }
  </Stack>
);

const GroupsListItem = memo(({ group, chatId }) => {
  const {name, avatar, _id,} = group;
  return <Link to={`?group=${_id}`} onClick={e=>{if(chatId===_id) e.preventDefault()}}>
    <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>
      <AvatarCard avatar={avatar}/>
      <Typography>{name}</Typography>
    </Stack>
  </Link>
});

export default Groups
