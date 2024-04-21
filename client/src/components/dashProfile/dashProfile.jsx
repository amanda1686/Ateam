import { Button, TextInput } from 'flowbite-react'
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import {getDownloadURL, getStorage, uploadBytesResumable} from 'firebase/storage'
import {app} from '../../firebase/firebase.js'

export default function DashProfile() {
  const {currentUser} =useSelector(state => state.user)
  const [imageFile, setImageFile] = useState(null);
  const [imageFileUrl, setImageFileUrl] = useState(null);
  const [imageFileUploadProgress, setImageFileUploadProgress] = useState(null);
  const [imageFileUploadError, setImageFileUploadError] = useState(null);
  const filePickerRef = useRef();
  const handleImageChange = (e) =>{
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImageFileUrl(URL.createObjectURL(file));
    }
    setImageFile(e.target.files[0])
  };
  useEffect(() =>{
    if (imageFile) {
      uploadImage();
    }
  }, [imageFile]);

  const uploadImage = async () =>{
    const storage = getStorage(app);
    const fileName = new Date().getTime() + imageFile.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImageFileUploadProgress(progress.toFixed(0));
      },
      (error) => {
        setImageFileUploadError('Could not upload image (File must be less than 2MB)');
      },
      () => {
            getDownloadURL(uploadTask.snapshot.ref).then = (downloadURL) =>{
              setImageFileUrl(downloadURL);
            }
      }
    )
  }
  return (
    <div className='max-w-lg mx-auto p-3 w-full'>
      <h1 className='my-7 text-center font-bold text-4xl profile'>Profile</h1>
        <form  className='flex flex-col gap-4'>
          <input type="file"  accept='image/*' onChange={handleImageChange} ref={filePickerRef} hidden/>
            <div 
              className="w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full" 
              onClick={() => filePickerRef.current.click()}>
              <img 
              src={imageFileUrl || currentUser.profilePicture} 
              alt="user"
              className='rounded-full w-full h-full object-cover border-8 border-[#F2CFB3]'
              />
            </div>
            <TextInput 
            type='text' 
            id='username' 
            placeholder='username'
            defaultValue={currentUser.username}
            />
            <TextInput 
            type='email' 
            id='email' 
            placeholder='email'
            defaultValue={currentUser.email}
            />            
            <TextInput 
            type='password' 
            id='password' 
            placeholder='password'
            />
            <Button
            type='submit'
            gradientDuoTone='redToYellow'
            outline
            >
              Update
            </Button>
        </form>
        <div className="text-red-500 flex justify-between mt-5">
          <span>Delete Account</span>
          <span>Logout</span>
        </div>
    </div>
  )
}
