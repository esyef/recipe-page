import { coverProps } from '../../types'

const Cover = ({alt,img}: coverProps) => {
  return (
      <img src={img} alt={alt} />
  )
}

export default Cover