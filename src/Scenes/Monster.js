class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 400;
        this.bodyY = 350;

        this.rHandY = this.bodyY - 100;
        this.rHandX = this.bodyX + 100;

        this.lHandY = this.bodyY - 100;
        this.lHandX = this.bodyX - 100;

        this.rLegY = this.bodyY + 120;
        this.rLegX = this.bodyX + 70;

        this.lLegY = this.bodyY + 120;
        this.lLegX = this.bodyX - 70;

        this.rEyeY = this.bodyY - 60;
        this.rEyeX = this.bodyX + 40;

        this.lEyeY = this.bodyY - 60;
        this.lEyeX = this.bodyX - 40;

        this.lHeadY = this.bodyY - 100;
        this.lHeadX = this.bodyX - 30;

        this.rHeadY = this.bodyY - 100;
        this.rHeadX = this.bodyX + 30;

        this.mouthY = this.bodyY + 30;
        this.mouthX = this.bodyX + 0;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        
        //body
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_redD.png");
        my.sprite.body.flipY = true; 
        //both hands
        my.sprite.rightHand = this.add.sprite(this.rHandX, this.rHandY, "monsterParts", "arm_redA.png");
        my.sprite.leftHand = this.add.sprite(this.lHandX, this.lHandY, "monsterParts", "arm_redA.png");

        my.sprite.rightHand.flipY = true;
        my.sprite.leftHand.flipY = true;
        my.sprite.leftHand.flipX = true; 

        //leg
        my.sprite.rightLeg = this.add.sprite(this.rLegX, this.rLegY, "monsterParts", "leg_redD.png");
        my.sprite.leftLeg = this.add.sprite(this.lLegX, this.lLegY, "monsterParts", "leg_redD.png");
        
        my.sprite.leftLeg.flipX = true; 
        
        //ex
        my.sprite.rightHead = this.add.sprite(this.rHeadX, this.rHeadY, "monsterParts", "detail_red_antenna_small.png");
        my.sprite.leftHead = this.add.sprite(this.lHeadX, this.lHeadY, "monsterParts", "detail_red_antenna_small.png");
        
        my.sprite.leftHead.flipX = true; 

        
        //eyes
        my.sprite.rightEye = this.add.sprite(this.rEyeX, this.rEyeY, "monsterParts", "eye_human.png");
        my.sprite.leftEye = this.add.sprite(this.lEyeX, this.lEyeY, "monsterParts", "eye_human.png");
        
        my.sprite.leftEye.flipX = true; 

        //mouth
        my.sprite.sMouth = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouthA.png");
        my.sprite.fMouth = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouthJ.png");

        my.sprite.fMouth.visible = false; 
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

       
    }

}