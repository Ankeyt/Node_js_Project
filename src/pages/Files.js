import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import axios from "axios";

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Button = styled.button`
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Files = () => {
  const [file, setfile] = useState();
  const [images, setimages] = useState([]);

  const changeHandler = (event) => {
    setfile(event.target.files[0]);
  };

  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem("user"))._id;
    /* const pics= await axios.get(`http://localhost:5000/file/find/${userId}`)
  if(pics)
  {
    setimages(pics)
  }*/
    /* fetch(`http://localhost:5000/file/find/${userId}`).then((res)=>{
   res.json()
  }).then((result)=>{
    console.log(result)
    setimages(result)
  })*/
    axios.get(`http://localhost:5000/file/find/${userId}`).then((res) => {
      console.log(res.data);
      setimages(res.data);
    });
  }, []);

  const uploadHandler = async () => {
    const formData = new FormData();
    const userId = JSON.parse(localStorage.getItem("user"))._id;
    console.log(userId);
    formData.append("image", file);
    formData.append("userId", userId);
    const url = "http://localhost:5000/file/single";

    const response = await axios.post(url, formData);
    if (response.data) {
      const oldImages = images;
      oldImages.push(response.data);
      console.log(oldImages)
      setimages(oldImages);
    }
  };

  /*return (
  <>
    <div>
      <Title>Upload Files </Title>

      <input placeholder="username" type="file" onChange={changeHandler} />
      <Button onClick={uploadHandler}>Upload </Button>
    </div>

    {
      images && images.forEach((image)=>{
        return (
          <img src={image.picUrl} alt="alternatetext"></img>
        );
      })
    }
  </>

  );*/

  return (
    <>
    <div>
      <Title>Upload Files </Title>

      <input placeholder="username" type="file" onChange={changeHandler} />
      <Button onClick={uploadHandler}>Upload </Button>
    </div>
    <div>
      {images &&
        images.map((item) => {
          return (
            <div>
              
              <img src={item.picUrl} alt="alternatetext" width={400} height={225}></img>
              <a>Code:{item.code}</a>
              <a href={item.picUrl} target={"blank"}> Download </a>
            </div>
          );
        })}
    </div>
    </>
  );
};

export default Files;
