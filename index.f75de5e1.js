"use strict";
function centerSpider() {
    const wall = document.querySelector(".wall");
    const spider = document.querySelector(".spider");
    const wallRect = wall.getBoundingClientRect();
    const spiderRect = spider.getBoundingClientRect();
    const centerX = (wallRect.width - spiderRect.width) / 2;
    const centerY = (wallRect.height - spiderRect.height) / 2;
    spider.style.position = "absolute";
    spider.style.left = `${centerX}px`;
    spider.style.top = `${centerY}px`;
}
centerSpider();

//# sourceMappingURL=index.f75de5e1.js.map