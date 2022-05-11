import React from 'react'

const Item = (props) => {
  return (
    <div class="col-lg-4">
    <div class="text-center card-box">
      <div class="member-card pt-2 pb-2">
        <div class="thumb-lg member-thumb mx-auto">
          <img
            src={props.img}
            class="rounded-circle img-thumbnail"
            alt="profile-image"
          />
        </div>
        <div class="">
          <h4>{props.nombre}</h4>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Item