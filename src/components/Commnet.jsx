import {useEffect,useRef,useState} from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const Comment = (props) => {
  // rightWrapRef 팝업 띄울 위치 
  // rightWrapRef 레퍼런스 생성하여 DOM 요소 참조
  const rightWrapRef = useRef(null);

  // 부모로부터 받은 onClose 함수 호출
  const handleclose = () => {
    props.onClose();
  };

  // 컴포넌트가 마운트될 때 한번만 실행 
  // rightWrap 돔 요소를 rightWrapRef 에 저장
  useEffect(() => {
    rightWrapRef.current = document.getElementById('rightWrap');
  }, []);

  // 더미 데이터
  const initialUsers = [
    { id: 1, date:1, name: 'evry_young', content: '이뿌당', heart : '🩶' },
    { id: 2, date:5, name: 'Bob', content: '맞팔해요~', heart : '🩷' },
    { id: 3, date:7, name: 'Charlie', content: 'React에서 배열을 기반으로 컴포넌트를 렌더링할 때는 각 요소에 고유한 key 속성을 제공해야 합니다.', heart : '🩶' }
  ];

  // 하트 아이콘 토글
  const [users,setUsers] = useState(initialUsers);
  const toggleHeart = (id) => {
    setUsers(users.map(user => 
      user.id === id ? { ...user, heart: user.heart === '🩶' ? '🩷' : '🩶' } : user
    ));
  }
  
    return (
      <>
        <Dialog
          open={props.open} 
          onClose={handleclose}
          container={rightWrapRef.current} //container 속성 : 특정 DOM요소에 렌더링
          // TransitionComponent={Transition}
          // keepMounted
          // aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{"댓글"}</DialogTitle>
          <DialogContent>
            <ul className='commnetBox'>
              {users.map(user => {
                return (
                  <li key={user.id}>
                  <div className='circle'></div>
                  <div className='text'>
                    <b>{user.name}</b> <span className='date'>{user.date}일전</span>
                    <p>{user.content}</p>
                  </div>
                  <span className='heart' onClick={() => toggleHeart(user.id)}>{user.heart}</span>
                </li>
                ) 
              })}
            </ul>
            {/* <DialogContentText id="alert-dialog-slide-description">
              
            </DialogContentText> */}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleclose}>닫기</Button>
          </DialogActions>
        </Dialog>
      </>
    );
}

export default Comment;