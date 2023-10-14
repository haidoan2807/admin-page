import React, { useEffect, useRef, useState } from 'react'
import styles from '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';

import { MainContainer, ChatContainer, MessageList, Message, MessageInput, Sidebar, Search, ConversationList, Avatar, EllipsisButton, MessageSeparator, TypingIndicator, VideoCallButton, Conversation, ConversationHeader, VoiceCallButton, SendButton, AttachmentButton, InfoButton } from '@chatscope/chat-ui-kit-react';
import { CloseCircleOutlined, DeleteOutlined, FileDoneOutlined, FileOutlined } from '@ant-design/icons';
import './style.css'
import TestServices from 'src/services/testService/test.service';
//https://stackoverflow.com/questions/526035/how-can-i-position-my-div-at-the-bottom-of-its-container
const Chat = () => {
  const convesations = [
    { id: 1, name: 'Lilly', lastSenderName: 'Lilly', info: 'Yes i can do it for you', status: 'available', unreadCnt: 3, img: 'https://baoquangngai.vn/dataimages/201603/original/images1483575_1.jpg' },
    { id: 2, name: 'John', lastSenderName: 'John', info: 'Yes i can do it for you', status: 'available', unreadCnt: 3, img: 'https://camhung.net/wp-content/uploads/2021/08/Taylor-Swift-VMA-2019-billboard-1548-1607693369-compressed.jpg' },
    { id: 3, name: 'Dad', lastSenderName: 'Dad', info: 'Yes i can do it for you', status: 'available', unreadCnt: 3, img: 'https://znews-photo.zadn.vn/w660/Uploaded/wyhktpu/2021_06_04/1_THUMBNAIL.jpg' },
  ]
  const messagesArr = [
    {
      id: 3,
      idConversation: 1,
      message: "Hello my friend incoming",
      sentTime: "15 mins ago",
      sender: "Zoe",
      direction: "incoming",
      position: "last",
      files: [],
    },
    {
      id: 4,
      idConversation: 1,
      message: "Ottawa ’s winter-lovers can now pick among a half-dozen skating trails that wind for miles through the wilderness in and around the city. But climate change threatens the good times.Live news, investigations, opinion, photos and video by the journalists of The New York Times from more than 150 countries around the world.",
      sentTime: "just now",
      sender: "Akane",
      direction: "outgoing",
      position: "single",
      img: 'https://kenh14cdn.com/203336854389633024/2021/7/27/photo-1-1627385343987657351288.jpg',
      files: [],
    },
    {
      id: 5,
      idConversation: 1,
      message: "The Battle for Kyiv Looms as a Long and Bloody Conflict",
      sentTime: "just now",
      sender: "Akane",
      direction: "outgoing",
      position: "last",
      img: 'https://kenh14cdn.com/203336854389633024/2021/7/27/photo-1-1627385343987657351288.jpg',
      files: [],
    },
    //
    {
      id: 6,
      idConversation: 2,
      message: "Hello my friend incoming",
      sentTime: "15 mins ago",
      sender: "Zoe",
      direction: "incoming",
      position: "last",
      files: [],
    },
    {
      id: 7,
      idConversation: 2,
      message: "Live news, investigations, opinion, photos and video by the journalists of The New York Times from more than 150 countries around the world.",
      sentTime: "just now",
      sender: "Akane",
      direction: "outgoing",
      position: "single",
      img: 'https://kenh14cdn.com/203336854389633024/2021/7/27/photo-1-1627385343987657351288.jpg',
      files: [],
    },
    {
      id: 8,
      idConversation: 2,
      message: "See Instagram photos and videos from The New York Times",
      sentTime: "just now",
      sender: "Akane",
      direction: "outgoing",
      position: "last",
      img: 'https://kenh14cdn.com/203336854389633024/2021/7/27/photo-1-1627385343987657351288.jpg',
      files: [],
    },

    //2
    {
      id: 9,
      idConversation: 3,
      message: "Hello my friend incoming",
      sentTime: "15 mins ago",
      sender: "Zoe",
      direction: "incoming",
      position: "last",
      files: [],
    },
    {
      id: 10,
      idConversation: 3,
      message: "Hello my friendHello my friendHello my friendHello my friendHello my friendHello my friendHello my friendHello my friendHello my friendHello my friendHello my friendHello my friendHello my friendHello my friendHello my friendHello my friendHello my friendHello my friend",
      sentTime: "just now",
      sender: "Akane",
      direction: "outgoing",
      position: "single",
      img: 'https://kenh14cdn.com/203336854389633024/2021/7/27/photo-1-1627385343987657351288.jpg',
      files: [],
    },
    {
      id: 11,
      idConversation: 3,
      message: "Hello my friend",
      sentTime: "just now",
      sender: "Akane",
      direction: "outgoing",
      position: "last",
      img: 'https://kenh14cdn.com/203336854389633024/2021/7/27/photo-1-1627385343987657351288.jpg',
      files: [],
    },
    {
      id: 111,
      idConversation: 3,
      message: "Hello my friend incoming",
      sentTime: "15 mins ago",
      sender: "Zoe",
      direction: "incoming",
      position: "last"
    },
    {
      id: 112,
      idConversation: 3,
      message: "Hello my friendHello my friendHello my friendHello my friendHello my friendHello my friendHello my friendHello my friendHello my friendHello my friendHello my friendHello my friendHello my friendHello my friendHello my friendHello my friendHello my friendHello my friend",
      sentTime: "just now",
      sender: "Akane",
      direction: "outgoing",
      position: "single",
      img: 'https://kenh14cdn.com/203336854389633024/2021/7/27/photo-1-1627385343987657351288.jpg',
      files: [],
    },
    {
      id: 113,
      idConversation: 3,
      message: "Hello my friend",
      sentTime: "just now",
      sender: "Akane",
      direction: "outgoing",
      position: "last",
      img: 'https://kenh14cdn.com/203336854389633024/2021/7/27/photo-1-1627385343987657351288.jpg',
      files: [],
    },
    {
      id: 114,
      idConversation: 3,
      message: "Hello my friendHello my friendHello my friendHello my friendHello my friendHello my friendHello my friendHello my friendHello my friendHello my friendHello my friendHello my friendHello my friendHello my friendHello my friendHello my friendHello my friendHello my friend",
      sentTime: "just now",
      sender: "Akane",
      direction: "incoming",
      position: "single",
      img: 'https://kenh14cdn.com/203336854389633024/2021/7/27/photo-1-1627385343987657351288.jpg',
      files: [],
    },
  ]


  const [messageInputValue, setMessageInputValue] = useState("");
  const [picturePreview, setPicturePreview] = useState('');
  const [pictureAsFile, setPictureAsFile] = useState();
  const inputElement = useRef(null);
  const [currentChat, setCurrentChat] = useState({});
  const [currentConversation, setCurrentConversation] = useState([])
  const [user, setUser] = useState({});
  const [currentUploadedFiles, setCurrentUploadedFiles] = useState([]);

  const [activeConversation, setActiveConversation] = useState(false)
  const inputRef = useRef();
  const [msgInputValue, setMsgInputValue] = useState("");
  const [messages, setMessages] = useState(messagesArr);




  useEffect(async () => {
    const data = await TestServices.testGet();
    console.log('testService', data);
    setUser({
      id: 1,
      img: '/static/media/8.35ee8919.jpg',
      name: 'Lili',

    })

    onChangeCurrentChat(convesations[0], 'conversation-1');
  }, []);

  const onSearch = (val) => {
    console.log('onSearch')
  }

  const onAttach = () => {
    //try {
    console.log('onAttach')
    inputElement.current.click();
    // } catch (error) {
    //   console.log(error)
    // }

  }

  //https://stackoverflow.com/questions/61700261/upload-image-request-from-react
  const uploadPicture = (e) => {
    console.log('onChangeCurrentChat')
    // const files = {
    //   data:e.target.files
    // };
    let files = new Object();
    files.data = e.target.files;
    setCurrentUploadedFiles(pre => [...pre, files.data[0]]);
  };

  const onChangeCurrentChat = (chat, idElement) => {
    console.log('onChangeCurrentChat')
    setCurrentUploadedFiles([]);
    setCurrentChat(chat);
    const msg = messages.filter(t => t.idConversation == chat.id)
    setCurrentConversation(msg);

    var element1 = document.getElementsByClassName('conversation');
    for (let index = 0; index < element1.length; index++) {
      const item = element1[index];
      item.classList.remove('current');
    }
    var element = document.getElementById(idElement);
    element.classList.add('current');
  }

  const onDeleteMsg = () => {
    console.log('onDeleteMsg')
  }

  const onRemoveUploadedFiles = (file) => {
    console.log('onRemoveUploadedFiles')
    const index = currentUploadedFiles.indexOf(file);
    if (index > -1) {
      setCurrentUploadedFiles(pre => pre.filter(t => t != file))
    }
  }


  const handleSend = (text) => {
    if (text || currentUploadedFiles.length > 0) {
      // const arrFileUrl = currentUploadedFiles.map(file => (window.URL.createObjectURL(file)));
      //console.log(arrFileUrl);
      const msg = {
        id: Math.random(),
        sender: currentChat.name,
        idConversation: currentChat.id,
        img: currentChat.img,
        message: text,
        direction: 'outgoing',
        files: currentUploadedFiles,
      }
      setMessages(pre => [...pre, msg]);
      setCurrentConversation(pre => [...pre, msg]);
      setMsgInputValue("");
      setCurrentUploadedFiles([])
    }
    inputRef.current.focus();
  };

  const isImageFile = (file) => {
    return file.type == 'image/png' || file.type == 'image/jpeg' || file.type == 'image/jpg' || file.type == 'image/gif';
  }

  const renderAttachedFileMsg = (file) => {
    if (isImageFile(file)) {
      return (<div className='attached-file-msg'>
        <img src={window.URL.createObjectURL(file)} width={70} height={15} />
      </div>)
    }
    return (
      <div className='attached-file-msg'>
        <div>
          <FileDoneOutlined className='attached-file' width={70} height={70} />
          <span className='filename'>{file.name.substring(0, 6) + '...'}</span>
        </div>
      </div>
    )
  }

  const previewFile = (file) => {
    console.log('previewFile', file);
    if (file == null) return null;
    if (isImageFile(file)) {
      return (
        <div key={Math.random()}>
          <div className="img-wrap">
            <CloseCircleOutlined className="close" onClick={() => onRemoveUploadedFiles(file)} />
            <img src={window.URL.createObjectURL(file)} width={50} height={50} />
          </div>
        </div>
      )
    } else {
      return (
        <div key={Math.random()}>
          <div className="img-wrap">
            <CloseCircleOutlined className="close" onClick={() => onRemoveUploadedFiles(file)} />
            <div className='attached-container'>
              <div>
                <FileOutlined className='attached-file' width={70} height={70} />
              </div>

              <div className='file-name'><span>{file.name.substring(0, 6) + '...'}</span></div>
            </div>
          </div>
        </div>
      )
    }
  }


  const resetFile = (e) => {
    e.target.value = ''
  }

  // Set initial message input value to an empty string                                                                     
  return <div style={{
    height: '66vh',
    // position: "relative"
  }}>

    <input hidden id='test' ref={inputElement} type="file" name="image" onChange={uploadPicture} onClick={resetFile} />


    <MainContainer responsive>
      <Sidebar position="left" scrollable={false}>
        <Search style={{ backgroundColor: '#f0f0f0' }} placeholder="Search..." onChange={onSearch} />
        <ConversationList>
          {convesations.map(t => (
            <Conversation className='conversation' id={`conversation-${t.id}`} key={t.id} name={t.name} lastSenderName={t.lastSenderName} info={t.info}
              onClick={() => onChangeCurrentChat(t, `conversation-${t.id}`)}
            >
              <Avatar src={t.img} name={t.name} status={t.status} />
            </Conversation>
          ))}
        </ConversationList>
      </Sidebar>

      <ChatContainer>
        <ConversationHeader>
          <ConversationHeader.Back />
          {console.log(currentChat)}
          <Avatar src={currentChat.img} name={currentChat.name} />
          <ConversationHeader.Content userName={currentChat.name} />
          <ConversationHeader.Actions>
            {/* <VoiceCallButton />
            <VideoCallButton />
            <EllipsisButton orientation="vertical" /> */}
          </ConversationHeader.Actions>
        </ConversationHeader>
        <MessageList>
          <MessageSeparator content="Saturday, 30 November 2019" />
        </MessageList>
      </ChatContainer>
    </MainContainer>
  </div>
}

export default Chat
