import Link from "next/link"

const Back = ({ path }) => (
    <Link href={path} className='back'>
        <svg fill="#fff" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 476.213 476.213" xmlSpace="preserve">
            <polygon points="476.213,223.107 57.427,223.107 151.82,128.713 130.607,107.5 0,238.106 130.607,368.714 151.82,347.5 
	57.427,253.107 476.213,253.107 "/>
        </svg>
    </Link>
)

export default Back