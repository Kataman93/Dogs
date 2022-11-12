
class Dogs {
   constructor(data){
      Object.assign(this, data)
   }

   getHtml(like, nope){

      const {name, avatar, age, bio} = this
      return `
      <main id='main-content'>
      <img src=${avatar}>
      <div class="text">
         <h3>${name}, ${age}</h3>
         <p>${bio}</p>
      </div>
      <img src="/images/badge-like.png" class="like ${like}">
      <img src="/images/badge-nope.png" class="nope ${nope}">
      </main> `
   }

}

export default Dogs