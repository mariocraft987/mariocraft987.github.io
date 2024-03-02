/*
@Under MIT LICENSE (C)
@Version 0.5.0
@Created by Mariocraft987 <https://scratch.mit.edu/users/mariocraft987>
*/

(function (Scratch) {
  "use strict";
  class SmartCubes {
    getInfo() {
      return {
        id: 'thesmartestcodingcubes45',
        name: 'Smart Cubes',
        blocks: [
          {
            opcode: "runProject",
            blockType: Scratch.BlockType.COMMAND,
            text: "Wave green Flag",
            disableMonitor: true,
          },
          {
            opcode: "comment",
            blockType: Scratch.BlockType.COMMAND,
            text: "//[micro]",
            disableMonitor: true,
            arguments: {
              micro: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "Comment"
              }
            }
          },
          {
            opcode: "longComment",
            blockType: Scratch.BlockType.CONDITIONAL,
            text: "/*",
            disableMonitor: true,
          },
          { blockType: Scratch.BlockType.LABEL, text: "Array Blocks" },
          {
            opcode: "addArray",
            blockType: Scratch.BlockType.COMMAND,
            text: "Add [STR] to Array",
            disableMonitor: true,
            arguments: {
              STR: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "Apple"
              }
            }
          },
          {
            opcode: "removeArray",
            blockType: Scratch.BlockType.COMMAND,
            text: "Remove [STR] from Array",
            disableMonitor: true,
            arguments: {
              STR: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "Banana"
              }
            }
          },
          {
            opcode: "clearArray",
            blockType: Scratch.BlockType.COMMAND,
            text: "Clear Array",
            disableMonitor: true,
          },
          {
            opcode: "array",
            blockType: Scratch.BlockType.REPORTER,
            text: "Return Array",
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
          { blockType: Scratch.BlockType.LABEL, text: "Danger Zone" },
            
        ],
      };
    }
    
    runProject(args) {
      Scratch.vm.runtime.greenFlag();
    }
    comment(args) {
        // Comment 
        // args.micro
    }
    longComment(args) {
        /* Long Comment 
        args.micro */
    }
    clearArray(args) {
      array = []
    }

    removeArray(args) {
      array.remove(args.STR);
    }
    
    addArray(args) {
      array.push(args.STR);
    }
    
    array(args) {
      if (!array) {
        return "[]"
      }else{
        return list
      }
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
