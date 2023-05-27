import { Box } from "@mui/system";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import ClearIcon from "@mui/icons-material/Clear";
import { Button, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import axios from "axios";
import { LoadingContext } from "@/context/loadingContext";
import { UserContext } from "@/context/userContext";
import { ProfileContext } from "@/context/profileContext";
import { ModalContext } from "@/context/modalContext";
import { BASE_URL } from "@/variables";

const Avatar = dynamic(() => import("react-avatar-edit"), { ssr: false });

const EditProfileModal = () => {
  const { setIsLoading } = useContext(LoadingContext);
  const { profileData } = useContext(ProfileContext);
  const { editUser }: any = useContext(UserContext);
  const { toggleModal } = useContext(ModalContext);
  const [editData, setEditData] = useState(profileData);
  const [profileImg, setProfileImg] = useState(null);

  // for Avatar start
  const [src, setSrc] = useState(null);
  const [preview, setPreview] = useState(null);

  const onClose = () => {
    // setPreview(null);
  };
  const onCrop = (view: any) => {
    console.log("view", view);
    setPreview(view);
  };
  // for Avatar end

  const changeProfile = async () => {
    setProfileImg(preview);
    try {
      const res = await axios.post(`${BASE_URL}/upload`, {
        files: preview,
      });
      console.log(preview);
      setEditData({
        ...editData,
        freelancer: {
          ...editData.freelancer,
          avatar: res.data.imgUrl.secure_url,
        },
      });
      console.log(editData);

      setIsLoading(false);
    } catch (err) {
      console.log("err", err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setEditData(profileData);
  }, [profileData]);

  return (
    <Box
      sx={{
        position: "relative",
        width: "500px",
        height: "80%",
        zIndex: "1",
        backgroundColor: "white",
        p: 2,
        borderRadius: "10px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {profileImg != null ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "10px",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box
              onClick={() => console.log(editData)}
              sx={{
                width: "170px",
                height: "170px",
                borderRadius: "50%",
                objectFit: "cover",
                overflow: "hidden",
              }}
            >
              <Image alt="asd" src={preview || ""} width={200} height={200} />
            </Box>
            <Button
              onClick={() => {
                setProfileImg(null);
              }}
            >
              Choose Image
            </Button>
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: "10px",
              width: "100%",
              overflow: "hidden",
            }}
          >
            <Box sx={{ width: "400px", height: "250px", objectFit: "cover" }}>
              <Avatar
                width={400}
                height={250}
                imageWidth={400}
                onCrop={onCrop}
                onClose={onClose}
                src={src || ""}
              />
            </Box>
            <Button
              onClick={() => {
                setIsLoading(true);
                changeProfile();
              }}
            >
              Upload
            </Button>
          </Box>
        )}
      </Box>
      <Button
        onClick={() => {
          editUser({ editData });
          toggleModal();
        }}
        sx={{ position: "absolute", bottom: "20px", right: "20px" }}
      >
        Done
      </Button>
    </Box>
  );
};

export default EditProfileModal;
