export default class s1 extends Phaser.Scene {

	constructor() {
		super({key:'s1'});
	}

	preload() {

	}

	create() {
		
	//-settings--------------------------------------------------
		cogG = this.add.image(windowWidth / 18, widnowHeight / 9, 'cog');
		cogG.setDisplaySize(windowWidth / 7 , widnowHeight / 7);
		cogG.setInteractive({ useHandCursor: true });
		cogG.on('pointerdown', () => this.HomeSettings());
		
		




	//-----------------------------------------------------------
		var pause = false;
		const cursors = this.input.keyboard.createCursorKeys();

	//-----scene-------------------------------------------------
	this.background = this.add.image(windowWidth / 2, widnowHeight / 2, 'bg');
	this.background.setDisplaySize(windowWidth, widnowHeight);

		
		
		slima = this.physics.add.sprite(windowWidth / 1.5, widnowHeight / 1.5, 'slime-a')
 


		player = this.physics.add.sprite(windowWidth / 9.9777777, widnowHeight / 3.5, 'player', 'assets/nonsprites/player/knight.png');

			slims = this.physics.add.sprite(windowWidth, widnowHeight / 4.5, 'slime-s'),

			ground = this.physics.add.sprite(windowWidth / 11, widnowHeight, 'ground');
			ground.setDisplaySize(windowWidth, widnowHeight / 5.5)
			player.setDisplaySize(225, 250)
			slims.setDisplaySize(225, 250)
			slima.setDisplaySize(13, 15)


		player.setCollideWorldBounds(true);
		slims.setCollideWorldBounds(true);
		ground.setCollideWorldBounds(true);

		player.setImmovable(false);
		slims.setImmovable(true);
		slima.setImmovable(true);
		ground.setImmovable(false)


		slims.setGravityY(300);
		player.setGravityY(1000);

			

        slima.setCollideWorldBounds(false);
        slima.setVelocityX(-200);
        slima.allowGravity = false;

	 frameNames = this.anims.generateFrameNames('player', {
  start: 1, end: 8, zeroPad: 4,
  prefix: 'assets/nonsprites/player/player', suffix: '.png'
});
		
	}
	update(){
		this.physics.add.collider(player, ground);
		this.physics.add.collider(slims, ground);
		this.physics.add.collider(slima, ground);

		this.physics.add.collider(slims, player, H2);
		this.physics.add.collider(slima, player, H1);


		H1 =  function(){division();}
		H2 =  function(){this.scene.switch('s2');}
		cursors = this.input.keyboard.createCursorKeys();

	/*	if (cursors.left.isDown)
		{
			player.setVelocityX(-440);
	
			player.anims.play('left', true);
		}
		else if (cursors.right.isDown)
		{
			player.setVelocityX(440);
	
			player.anims.play('right', true);
		}
		else
		{
			player.setVelocityX(0);
	
			player.anims.play('turn');
		}
	
		if (cursors.up.isDown && player.body.touching.down)
		{
			player.setVelocityY(-660);
			setTimeout(() => {
				player.setVelocityY(275);

			}, 400);

		}*/
	}
	HomeSettings(){
		this.scene.switch('cog');
		
	}
	Mainmenu(){

	}

	BackSyst1(){

	}
	
}