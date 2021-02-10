let reviewDiv = document.querySelector('.review')


class Review {
    constructor(review){
        this.id = review.id
        this.user = review.user
        this.comment = review.comment
        this.rating = review.rating
    }

    static createReview(product_id, reviewDiv) {
        let formDiv = document.querySelector(".review-form")
        let form = 
`           <form class="new-review-form">
                <label>Name: </label>
                <input type="text" name="user" id="new-review-name"/><br><br>
                <label>Comment: </label>
                <textarea id="new-review-comment" name="comment" rows="4" cols="50"></textarea><br><br>
                <label>Rating: </label>
                <input type="text" name="rating" id="new-review-rating"/><br><br>
                <input type="submit"/>
            </form>
`
        formDiv.insertAdjacentHTML('beforeend', form)


        formDiv.addEventListener('submit', function(event) {
            let newForm = document.querySelector(".new-review-form")
            event.preventDefault();
            fetch('http://localhost:3000/api/v1/reviews', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
        
                body: JSON.stringify({
                    user: event.target.user.value,
                    comment: event.target.comment.value,
                    rating: event.target.rating.value,
                    product_id: product_id
                })
            })
            .then(response => response.json())
            .then(review => {
                let newReview = new Review(review)
                newReview.appendReview(reviewDiv)
            })
            newForm.reset()
            formDiv.remove()
        })
    }

    appendReview(reviewDiv){

        let p = document.createElement('p')
        p.innerHTML = `${this.user} - Rating: ${this.rating}`

        let li = document.createElement('li')
        li.innerHTML = `${this.comment}`

        reviewDiv.append(p, li)
    }
}