// Old sjity code
// setInterval(() => {
//     //Reward button element

//     if (rewardBtn != null) {
//         rewardBtn.click();
//     }
// }, 30 * 1000)

let rewardBtn;
let rewardBar = document.querySelector(".chat-input__buttons-container");

const config = { attributes: true, childList: true, subtree: true };

const callback = function (mutationsList, observer) {
    for (const mutation of mutationsList) {
        if (mutation.target.querySelector('.claimable-bonus__icon')) {
            rewardBtn = document.querySelector(".claimable-bonus__icon");
            if (rewardBtn != null) {
                rewardBtn.click();
            }
        }
    }
};

const observer = new MutationObserver(callback);


observer.observe(rewardBar, config);
