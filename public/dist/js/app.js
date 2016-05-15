"use strict";function outputUpdateChild(t){document.querySelector("#child-out").value=t}function outputUpdateAdult(t){document.querySelector("#adult-out").value=t}function outputUpdateGrandpa(t){document.querySelector("#grandpa-out").value=t}d3.json("/api/data",function(t,e){var n=["times"],a=["Distance from object to sensor"],o=["Settings for red LED"],s=["Settings for green LED"];e.forEach(function(t,e){n.push(t.time),a.push(t.input.distance),o.push(t.settings.red),s.push(t.settings.green)});var c=20,i=a.slice(Math.max(a.length-c,1)),u=n.slice(Math.max(n.length-c,1)),r="Distance from object in sensor",l="times",d=a.slice(-1),m=o.slice(-1),p=s.slice(-1);i.unshift(r),u.unshift(l),console.log(i),console.log(u);c3.generate({data:{x:"times",xFormat:"%Y-%m-%d %H:%M:%S",columns:[i,u],type:"area-step"},axis:{x:{type:"timeseries",categories:n,tick:{format:"%H:%M"}}},bindto:"#chart"}),c3.generate({data:{columns:[["distance",d]],type:"gauge"},gauge:{label:{format:function(t,e){return t},show:!0},min:0,max:250,units:" CM",width:50},color:{pattern:["#e74c3c","#e74c3c","#f1c40f","#2ecc71"],threshold:{unit:"value",max:250,values:[0,m,p]}},bindto:"#pie"})});