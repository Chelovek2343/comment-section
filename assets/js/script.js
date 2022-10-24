const form = document.querySelector('form');
const textarea = document.getElementById('textarea');
const sendButton = document.getElementById('send');
const mainSection = document.querySelector('.main__section');
const wrapper = document.querySelector('.wrapper');
const replyButtons = document.querySelectorAll('.reply');
// const userNames = document.querySelectorAll('.userName').children[1];
// console.log(userNames)

// const counterNumbers = parseInt(
//     document.querySelector('.counterNumber').innerHTML
// );
// const add = counterNumbers + 1;
// const minus = counterNumbers - 1;
// const increaseButtons = document.querySelectorAll('.increaseButton');
// const decreaseButtons = document.querySelectorAll('.decreaseNumber');

// increaseButtons.forEach((increaseButton) => {
//     increaseButton.addEventListener('click', () => {
//         document.querySelector('.counterNumber').innerHTML = add;
//     });
// });

// decreaseButtons.forEach((decreaseButton) => {
//     decreaseButton.addEventListener('click', () => {
//         document.querySelector('.counterNumber').innerHTML = minus;
//     });
// });

deleteSectionItem();
editSectionItem();

// create Section item
form.addEventListener('submit', (e) => {
    e.preventDefault();

    createSectionItem();

    if (textarea.value) {
        textarea.value = '';
    }

    mainSection.appendChild(sectionItem);
});

// Reply button
replyButtons.forEach((el) => {
    el.addEventListener('click', () => {
        const replyEl = document.createElement('div');

        replyEl.innerHTML = `
        <div class="reply__section">
            <div class="user__img">
                <img src="assets/img/main__user.png" alt="">
            </div>
            <div class="reply__textarea">
                <textarea></textarea>
            </div>
            <div class="reply__button">
                <button class="reply">Reply</button>
            </div>
        </div>
        `;

        const replyButton = replyEl.querySelector('.reply');
        const replyTextarea = replyEl.querySelector('textarea');

        replyButton.addEventListener('click', () => {
            const sectionItem = document.createElement('div');
            sectionItem.innerHTML = `
                <div class="section__item">
                    <div class="counter">
                        <div class="increase__button">
                            <button>+</button>
                        </div>
                        <div class="counter__number">
                            <p>0</p>
                        </div>
                        <div class="decrease__number">
                            <button>-</button>
                        </div>
                    </div>
                    <div class="comment__info">
                        <div class="info__top">
                            <div class="user">
                                <div class="user__img">
                                    <img src="assets/img/main__user.png" alt="">
                                </div>
                                <div class="username">
                                    <p>juliusomo</p>
                                </div>
                                <div class="you__user">
                                    <p>you</p>
                                </div>
                                <div class="user__activity">
                                    <p>1 seconds ago</p>
                                </div>
                            </div>
                            <div class="buttons">
                                <div class="delete__button">
                                    <button class="deleteBtn"><img src="assets/img/delete.svg" alt=""> Delete</button>
                                </div>
                                <div class="reply__button">
                                    <button class="edit"><img src="assets/img/edit.svg" alt=""> Edit</button>
                                </div>
                            </div>
                        </div>
                        <div class="info__main">
                            <p class='infoMain'>${replyTextarea.value}</p>
                        </div>
                    </div>
                </div>`;

            // createSectionItem();

            wrapper.appendChild(sectionItem);
            deleteSectionItem();
            // editSectionItem();

            if (replyButton.click) {
                replyEl.style.display = 'none';
            }
        });

        wrapper.appendChild(replyEl);
    });
});

// create Section Item function
function createSectionItem() {
    sectionItem = document.createElement('div');

    sectionItem.innerHTML = `
            <div class="section__item">
                <div class="counter">
                    <div class="increase__button">
                        <button>+</button>
                    </div>
                    <div class="counter__number">
                        <p>0</p>
                    </div>
                    <div class="decrease__number">
                        <button>-</button>
                    </div>
                </div>
                <div class="comment__info">
                    <div class="info__top">
                        <div class="user">
                            <div class="user__img">
                                <img src="assets/img/main__user.png" alt="">
                            </div>
                            <div class="username">
                                <p>juliusomo</p>
                            </div>
                            <div class="you__user">
                                <p>you</p>
                            </div>
                            <div class="user__activity">
                                <p>1 seconds ago</p>
                            </div>
                        </div>
                        <div class="buttons">
                            <div class="delete__button">
                                <button class="deleteBtn"><img src="assets/img/delete.svg" alt=""> Delete</button>
                            </div>
                            <div class="reply__button">
                                <button class="edit"><img src="assets/img/edit.svg" alt=""> Edit</button>
                            </div>
                        </div>
                    </div>
                    <div class="info__main">
                        <p class='infoMain'>${textarea.value}</p>
                    </div>
                </div>
            </div>`;

    const deleteButtons = sectionItem.querySelectorAll('.deleteBtn');
    deleteButtons.forEach((deleteButton) => {
        deleteButton.addEventListener('click', () => {
            const card =
                deleteButton.parentElement.parentElement.parentElement
                    .parentElement.parentElement;
            card.style.display = 'none';
        });
    });

    editSectionItem();
}

// Delete Button
function deleteSectionItem() {
    const deleteButtons = document.querySelectorAll('.deleteBtn');
    deleteButtons.forEach((deleteButton) => {
        deleteButton.addEventListener('click', () => {
            const card =
                deleteButton.parentElement.parentElement.parentElement
                    .parentElement.parentElement;
            card.style.display = 'none';
        });
    });
}

function editSectionItem() {
    const editButtons = document.querySelectorAll('.edit');

    editButtons.forEach((editButton) => {
        editButton.addEventListener('click', () => {
            createSectionItem();
            const box =
                editButton.parentElement.parentElement.parentElement
                    .parentElement;

            const infoMain = document.querySelector('.infoMain');
            // const infoContainer = sectionItem.querySelector('.info__main');
            const updateButton = document.createElement('button');
            // updateButton.textContent = 'Update';
            // updateButton.className = 'button__update';

            const editContainer = document.createElement('div');
            editContainer.innerHTML = `
                <div class="edit__textarea">
                    <textarea></textarea>
                </div>
                <div class="update__button">
                    <button>Update</button>
                </div>
            `;

            box.appendChild(editContainer);
            infoMain.style.display = 'none';
        });
    });
}
