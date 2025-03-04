function logShout(string) {
    return string.toLowerCase();
  }
  
  
  function logWhisper(string) {
    console.log(string.toLowerCase());
  }
  
  
  function logShout(string) {
    console.log(string.toUpperCase());
  }
  

  function shout(string) {
    return string.toUpperCase();
  }
  
  
  function whisper(string) {
    return string.toLowerCase();
  }
  
  
  function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
      return "I can't hear you!";
    } else if (string === string.toUpperCase()) {
      return "YES INDEED!";
    } else if (string === "Let's have dinner together!") {
      return "I would love to!";
    }
  } 
  
  
  console.log(logShout("hello")); 
  logWhisper("HELLO"); 
  logShout("hello"); 
  
  console.log(shout("hello")); 
  console.log(whisper("HELLO")); 
  
  console.log(sayHiToHeadphonedRoommate("hello")); 
  console.log(sayHiToHeadphonedRoommate("HELLO")); 
  console.log(sayHiToHeadphonedRoommate("Let's have dinner together!"));