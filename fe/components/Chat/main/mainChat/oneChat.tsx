import { ChatContext } from "@/context/chatContext";
import { formLabelClasses, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";

const OneChat = ({ message }: any) => {
  const router = useRouter();
  console.log(router.query.id);
  console.log(message.sender);
  const { chatArr }: any = useContext(ChatContext);

  return (
    <Box
      style={
        router.query.id === message.sender
          ? { justifyContent: "flex-start", flexDirection: "row-reverse" }
          : {}
      }
      sx={{
        display: "flex",
        alignItems: "end",
        gap: "10px",
      }}
    >
      <Box
        style={router.query.id === message.sender ? { display: "none" } : {}}
        sx={{
          maxWidth: "50px",
          minWidth: "50px",
          aspectRatio: "1/1",
          backgroundColor: "blue",
          borderRadius: "50%",
          overflow: "hidden",
        }}
      >
        <Image
          alt="img"
          width={2000}
          height={1000}
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
          className="h-full w-full object-cover"
        />
      </Box>
      <Box
        style={
          router.query.id === message.sender
            ? { alignItems: "end" }
            : { alignItems: "start" }
        }
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          height: "100%",
        }}
      >
        <Typography
          style={
            router.query.id === message.sender
              ? {
                  backgroundColor: "rgb(32,76,244)",
                  color: "white",
                }
              : {
                  backgroundColor: "white",
                }
          }
          sx={{
            maxWidth: "400px",
            width: "fit-content",
            padding: "10px 15px",
            borderRadius: "15px",
          }}
        >
          {message.message}
        </Typography>
      </Box>
    </Box>
  );
};

export default OneChat;

// import { ChatContext } from "@/context/chatContext";
// import { formLabelClasses, Typography } from "@mui/material";
// import { Box } from "@mui/system";
// import Image from "next/image";
// import { useRouter } from "next/router";
// import React, { useContext, useEffect, useState } from "react";

// const OneChat = ({ message }: any) => {
//   const router = useRouter();
//   console.log(router.query.id);
//   console.log(message.sender);
//   const { chatArr }: any = useContext(ChatContext);

//   return (
//     <Box
//       style={
//         message.own
//           ? { justifyContent: "flex-start", flexDirection: "row-reverse" }
//           : {}
//       }
//       sx={{
//         display: "flex",
//         alignItems: "end",
//         gap: "10px",
//       }}
//     >
//       <Box
//         style={message.own ? { display: "none" } : {}}
//         sx={{
//           maxWidth: "50px",
//           minWidth: "50px",
//           aspectRatio: "1/1",
//           backgroundColor: "blue",
//           borderRadius: "50%",
//           overflow: "hidden",
//         }}
//       >
//         <Image
//           alt="img"
//           width={2000}
//           height={1000}
//           src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
//           className="h-full w-full object-cover"
//         />
//       </Box>
//       <Box
//         style={message.own ? { alignItems: "end" } : { alignItems: "start" }}
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           gap: "5px",
//           height: "100%",
//         }}
//       >
//         <Typography
//           style={
//             message.own
//               ? {
//                   backgroundColor: "rgb(32,76,244)",
//                   color: "white",
//                 }
//               : {
//                   backgroundColor: "white",
//                 }
//           }
//           sx={{
//             maxWidth: "400px",
//             width: "fit-content",
//             padding: "10px 15px",
//             borderRadius: "15px",
//           }}
//         >
//           {message.message}
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// export default OneChat;
