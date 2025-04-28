--[[
 .____                  ________ ___.    _____                           __                
 |    |    __ _______   \_____  \\_ |___/ ____\_ __  ______ ____ _____ _/  |_  ___________ 
 |    |   |  |  \__  \   /   |   \| __ \   __\  |  \/  ___// ___\\__  \\   __\/  _ \_  __ \
 |    |___|  |  // __ \_/    |    \ \_\ \  | |  |  /\___ \\  \___ / __ \|  | (  <_> )  | \/
 |_______ \____/(____  /\_______  /___  /__| |____//____  >\___  >____  /__|  \____/|__|   
         \/          \/         \/    \/                \/     \/     \/                   
          \_Welcome to LuaObfuscator.com   (Alpha 0.10.9) ~  Much Love, Ferib 

]]--

local v0=(cloneref and cloneref(game:GetService("VoiceChatInternal"))) or game:GetService("VoiceChatInternal") ;local v1=(cloneref and cloneref(game:GetService("VoiceChatService"))) or game:GetService("VoiceChatService") ;task.spawn(function() while true do local v3=game:GetService("CoreGui");local v4=v3:FindFirstChild("InGameMenuInformationalDialog",true);if v4 then v4:Destroy();end task.wait(0.05 + 0 );end end);local function v2() for v5=1,880 -(282 + 595)  do v0:Leave();task.wait();v1:rejoinVoice();v1:joinVoice();end end v2();if  not getgenv().voiceChat_Check then local v6=0;local v7;local v8;local v9;local v10;while true do if (v6==(1639 -(1523 + 114))) then v10=nil;function v10() local v12=0 + 0 ;local v13;while true do if (v12==(0 -0)) then if v7 then return;end v7=true;v12=1066 -(68 + 997) ;end if (v12==2) then v7=false;break;end if (v12==1) then v13=1270 -(226 + 1044) ;while v13<v9  do local v16=0;while true do if (v16==(4 -3)) then v13=v13 + 1 ;task.wait(v8);break;end if (v16==(117 -(32 + 85))) then v2();if (v0.StateChanged~=Enum.VoiceChatState.Ended) then v7=false;return;end v16=1;end end end v12=2 + 0 ;end end end v6=1 + 2 ;end if (v6==(957 -(892 + 65))) then getgenv().voiceChat_Check=true;v7=false;v6=2 -1 ;end if (v6==3) then v0.StateChanged:Connect(function(v14,v15) if ((v15==Enum.VoiceChatState.Ended) and  not v7) then v10();end end);break;end if (v6==(1 -0)) then v8=0.5;v9=458 -208 ;v6=352 -(87 + 263) ;end end end
