(function (Scratch) {
  "use strict";
  class SmartCubes {
    getInfo() {
      return {
        id: 'thesmartestcodingcubes45',
        name: 'Smart Cubes',
        blocks: [
          {
            opcode: "comment",
            blockType: Scratch.BlockType.COMMAND,
            text: "//[micro]",
            disableMonitor: true,
            arguments: {
              micro: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "true"
              }
            }
          },
          {
            opcode: "longComment",
            blockType: Scratch.BlockType.CONDITIONAL,
            text: "/*",
            disableMonitor: true,
          },
          { blockType: Scratch.BlockType.LABEL, text: "AI Blocks" },
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

    comment(args) {
        // Comment 
        // args.micro
    }
    longComment(args) {
        /* Long Comment 
        args.micro */
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
