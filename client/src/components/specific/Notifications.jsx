import {
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  ListItem,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAsyncMutation, useErrors } from "../../hooks/hook";
import {
  useAcceptFriendRequestMutation,
  useGetNotificationsQuery,
} from "../../redux/api/api";
import { setIsNotification } from "../../redux/reducers/misc";

const Notifications = () => {
  const dispatch = useDispatch();
  const { isLoading, data, error, isError } = useGetNotificationsQuery();
  const { isNotification } = useSelector((state) => state.misc);
  const [acceptRequest] = useAsyncMutation(useAcceptFriendRequestMutation);
  const friendRequestHandler = async({ _id, accept }) => {
    // Your logic to handle friend request
    dispatch(setIsNotification(false));
    await acceptRequest("Accepting...", { requestId: _id, accept });
  }
  const closeHandler = () => dispatch(setIsNotification(false));
  useErrors([{ error, isError }]);
  return (
    <Dialog open={isNotification} onClose={closeHandler}>
      <Stack p={{ xs: "1rem", sm: "2rem" }} width={"36rem"}>
        <DialogTitle>
          Notifications
        </DialogTitle>
        {
          isLoading ? <Skeleton /> :
          <>
            {
              data?.allRequests.length > 0 ? (
                data?.allRequests?.map((i) => (
                  <NotificationItem 
                    sender={i.sender}
                    _id={i._id}
                    handler={friendRequestHandler}
                    key={i._id}
                  />
                ))
              ) : (
                <Typography textAlign={"center"}>No Notifications</Typography>
              )
            }
          </>
        }
      </Stack>
    </Dialog>
  )
};

const NotificationItem = memo(({ sender, _id, handler }) => {
  const { name, avatar } = sender;

  return (
    <ListItem>
      <Stack direction={"row"} alignItems={"center"} spacing={"1rem"} width={"100%"}>
        <Avatar/> {/* Fix: Avatar with src */}
        <Typography
          variant='body1'
          sx={{
            flexGrow: 1,  
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            width: "100%"
          }}>
          {`${name} sent you a friend request.`}
        </Typography>
        <Stack direction={{ xs: "column", sm: "row" }}>
          <Button onClick={() => handler({ _id, accept: true })}>Accept</Button>
          <Button color="error" onClick={() => handler({ _id, accept: false })}>Reject</Button>
        </Stack>
      </Stack>
    </ListItem>
  )
})

export default Notifications;
