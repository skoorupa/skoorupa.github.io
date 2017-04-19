(function(d,l){
	var mv='1.3e';
	if(l.href=='https://www.facebook.com/settings?tab=applications'){
		var blacklist={
			'names': [
				'Edytowany','Edytowano','Edytowane',
				'fejs','fejsbuk','facebook',
				'',' ','&nbsp;',
				'fcgol',
				'Ripostuj',
				'Komu możesz zaufać?',
				'obrazkowe',
				'Smiechawa24'
			],
			'src': [
				'jazdaa.pl',
				'geek24.pl',
				'kozackie24.pl'
			]
		}; 
		var spc=d.getElementById('SettingsPage_Content');
		var appbox=spc.children[0].children[1].children[0].children[1].children[0];
		var apps=appbox.children;
		var logbox=d.createElement('div');
		logbox.setAttribute('style','background-color:lime;position:fixed;z-index:9999;top:0 	!important;padding:5px;right:0 !important;');
		logbox.innerHTML='<b>Czyściciel FB</b> <button onclick=\'document.body.removeChild(this.parentNode)\' style=\'float:right !important;\'>X</button><br><br>';
		for(var i=0;i<apps.length;i++){
			for(var j=0;j<blacklist.names.length;j++){
				if(apps[i].children[0].children[1].children[1].children[0].children[0].innerHTML == blacklist.names[j])	{
					logbox.setAttribute('style','background-color:red;position:fixed;z-index:9999;top:0 	!important;padding:5px;right:0 !important;');
					apps[i].style.backgroundColor='red';
					var ibox = d.createElement('div');
					ibox.innerHTML = 'Wykryto: '+apps[i].children[0].children[1].children[1].children[0].children[0].	innerHTML;
					logbox.appendChild(ibox);
				}
			}
		}
		logbox.innerHTML +='<br><br>Zakończono sprawdzanie!';
		d.body.appendChild(logbox);
	} else {
		l.href='http://zaxad23.github.io/spamcheckfb?'+mv;
	}
})(document,location);