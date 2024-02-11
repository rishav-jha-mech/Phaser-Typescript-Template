import "phaser";

export default class PhaserTemplateScene extends Phaser.Scene {
  constructor() {
    super({ key: "PhaserTemplateScene" });
  }

  preload() {
    this.load.image("phaser", "assets/phaser.png");
    this.load.image("ts", "assets/ts.png");
  }

  create() {
    const center = {
      X: this.cameras.main.centerX,
      Y: this.cameras.main.centerY,
    };
    const title = this.add.text(
      center.X,
      center.Y,
      "Phaser 3\nTypescript Template",
      {
        fontSize: "40px",
        color: "#ddd",
        fontFamily: "Roboto",
        align: "center",
      },
    );
    title.x -= title.width / 2;
    const phaserLogo = this.add.image(
      center.X - 90,
      center.Y - title.height * 1.25,
      "phaser",
    );
    phaserLogo.setDisplaySize(150, 150);
    const tsLogo = this.add.image(
      center.X + 90,
      center.Y - title.height * 1.25,
      "ts",
    );
    tsLogo.setDisplaySize(150, 150);
    const objects = [title, phaserLogo, tsLogo];
    objects.forEach((obj) => {
      obj.setAlpha(0);
    });
    this.tweens.add({
      targets: objects,
      alpha: 1,
      duration: 2000,
      ease: "Power2",
    });
  }
}

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.RESIZE,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  parent: "game",
  scene: [PhaserTemplateScene],
};

new Phaser.Game(config);
