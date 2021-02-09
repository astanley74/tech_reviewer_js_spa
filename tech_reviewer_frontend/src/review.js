document.addEventListener("DOMContentLoaded", function(){

})

class Review {
    constructor(review){
        this.id = review.id
        this.user = review.user
        this.comment = review.comment
        this.rating = review.rating
    }

    appendReview(){
        let reviewDiv = document.querySelector('.review')
        console.log(reviewDiv)

        let p = document.createElement('p')
        p.innerHTML = `${this.user}`

        let ul = document.createElement('ul')
        let li = document.createElement('li')
        li.innerHTML = `${this.comment}`
        ul.append(li)
        reviewDiv.append(p, ul)
    }
}