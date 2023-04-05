function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5lLuRwHt3fD":
        Script1();
        break;
  }
}

function Script1()
{
  const player = GetPlayer();

const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();
date.getHours().toString().padStart(2, '0');
date.getMinutes().toString().padStart(2, '0');
time = hours+':'+minutes;
player.SetVar('time', time);

 
 blessing = ' ';
  if (hours >=12 && hours <18) { 
 blessing = 'צהריים טובים';
 }

else if (hours >=18 && hours <05)
{
  blessing = 'ערב טוב';
}

else if (hours >=05 && hours <12)
{
  blessing = 'בוקר טוב';
}
player.SetVar('blessing', blessing);

let timeinDay;
  if (hours >=12 && hours <18) { 
 timeinDay = "noon";
 }

else if (hours >=18 && hours <05)
{
   timeinDay = "night";
}

else if (hours >=05 && hours <12)
{
   timeinDay = "morning";
}

player.SetVar('timeinDay', timeinDay);
}

