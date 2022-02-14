const router = require('express').Router();

router.get('',function (req,res){
	let id = req.query.id;
	let pw = req.query.pw;
	if(id==undefined){
		res.send('인자 id가 빠졌습니다!');
	}else if(pw == undefined){
		res.send('인자 pw가 빠졌습니다!');
	}else{
		let idCode = id.replace(/ /g,"");
		let pwCode = pw.replace(/ /g,"");
    let agent = req.header('User-Agent');
		let link = `zoommtg://zoom.us/join?confno=${idCode}&pwd=${pwCode}`;  //PC
		if(agent.indexOf('Mobi')!=-1){
			link = `zoomus://zoom.us/join?confno=${idCode}&pwd=${pwCode}`;  //Mobile
		}
		res.send(`<html><head></head><body><a href="${link}">이동이 안되었다면 여기를 누르세요!</a><script>window.location.href = "${link}"</script><body></html>`);
	}
});

module.exports = router;
