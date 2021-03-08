let addReview = false;

class Review {
    constructor(review){
        this.id = review.id
        this.user = review.user
        this.comment = review.comment
        this.rating = review.rating
    }

    static newReviewForm(product_id, reviewDiv, divCard) {
        const formDiv = document.createElement('div')
        formDiv.setAttribute('class', 'review-form')
        divCard.append(formDiv)

        const form = 
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
        Review.createReview(product_id, reviewDiv, formDiv)
    }
    

    static createReview(product_id, reviewDiv, formDiv) {
        Review.hideOrShowReviewForm(formDiv)

        formDiv.addEventListener('submit', function(event) {
            const newForm = formDiv.lastElementChild

            event.preventDefault();
            apiService.postReview(event, product_id)
            .then(review => {
                const newReview = new Review(review)
                newReview.appendReview(reviewDiv)
                newForm.reset()
                formDiv.style.display = "none";
                addReview = false;
            })
        })
    }

    static hideOrShowReviewForm(formDiv) {
        const addReviewBtn = formDiv.parentElement.getElementsByClassName("add-review-button")[0]
        addReviewBtn.addEventListener('click', function() {
            addReview = !addReview
            if (addReview) {
                formDiv.style.display = "block"
            }
            else {
                formDiv.style.display = "none"
            }
        })
    }

    appendReview(reviewDiv){
        const currentReview = document.createElement('div')
        currentReview.dataset.id = this.id
        currentReview.setAttribute('class', 'current-review')

        const p = document.createElement('p')
        p.innerHTML = `${this.user} - Rating: ${this.rating}`

        const li = document.createElement('li')
        li.innerHTML = `${this.comment}`

        const deleteBtn = document.createElement('button')
        deleteBtn.innerHTML = "Delete Review"

        p.append(deleteBtn)

        currentReview.append(p, li)

        reviewDiv.append(currentReview)

        this.deleteReview(deleteBtn)
    }

    deleteReview(deleteBtn){
        deleteBtn.addEventListener('click', function(event){
            event.preventDefault();
            apiService.removeReview(event)
            event.target.parentElement.parentElement.remove()
        })
    }
}