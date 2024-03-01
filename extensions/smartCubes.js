(function (Scratch) {
  "use strict";
  class SmartCubes {
    getInfo() {
      return {
        id: 'thesmartestcodingcubes45',
        name: 'Smart Cubes',
        blocks: [
          {
            opcode: "AInow",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "Is CubeAI available?",
            disableMonitor: true,
          },
          {
            opcode: "AIdecide",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "True or false",
            disableMonitor: true,
          },
          {
            opcode: "AIcolor",
            blockType: Scratch.BlockType.REPORTER,
            text: "Random color hex",
            disableMonitor: true,
          },
            
        ],
      };
    }

    AInow(args) {
        return true
    }
    AIdecide(args) {
      let number = Math.floor(Math.random() * 2);
      if (number === 1) {
        return true
      }else{
        return false
      }
    }
    AIcolor(args) {
      return "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);})
    }
  }
  
  Scratch.extensions.register(new SmartCubes())
})(Scratch);
