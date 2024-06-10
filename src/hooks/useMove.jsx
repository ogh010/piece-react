import { useNavigate } from 'react-router-dom'

/**
 * 페이지 이동을 위한 커스텀 훅 
 * @param {String} url  - 이동할 url
 * @returns {Function} - 페이지 이동을 실행하는 함수 
 */
const useMove = (url) => {
    const navigate = useNavigate();
    /**
     * 페이지를 지정된 url 로 이동시키는 함수
     */
    const move = () => {
        navigate(url)
    }
    return move;
}

export default useMove