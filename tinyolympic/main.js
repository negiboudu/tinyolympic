title = "Tiny-olympic";

description = `
Very small
olympic!
`;

characters = [];

options = {
  isPlayingBgm: true,
  seed: 20210724
};

let ballpos = vec(10, 10);
let ballsize = vec(3, 3);
let ballmove = vec(1, 0);
let racketsize = vec(2, 10);

function update() {
  if (!ticks) {
  }

  // court
  color("black");
  rect(0, 90, 100, 5);
  rect(50, 80, 2, 10);

  // ball
  color("yellow");
  let ball = box(ballpos, ballsize);

  // ball move
  ballpos.x += ballmove.x;
  if (ballpos.x > 95 || ballpos.x < 5) {
    ballmove.x = ballmove.x * -1;
  }

  // colliding
  if (input.isJustPressed) {
    // racket
    color("blue");
    if (rect(input.pos.x - racketsize.x / 2, input.pos.y - racketsize.y / 2, racketsize).isColliding.rect.yellow) {
      score += 10;
      text("hit", 5, 5);
      play("coin");
      ballmove.x = ballmove.x * -1;
    };
  }
}