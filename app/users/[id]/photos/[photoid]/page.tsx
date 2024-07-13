import React from 'react'
import { NumberLiteralType } from 'typescript';

interface Props {
  params : {
    id: number;
    photoid: number;
  }
}

const PhotoPage = ({params: {id, photoid}}: Props) => {
  return (
    <div>
      PhotoPage {id} {photoid}
    </div>
  )
}

export default PhotoPage
