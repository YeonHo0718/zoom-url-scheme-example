const router = require('express').Router();

router.get('',function (req,res){
	const id = req.query.id;
	const pw = req.query.pw;
	if(id==undefined){
		res.send('인자 id가 빠졌습니다!');
	}else if(pw == undefined){
		res.send('인자 pw가 빠졌습니다!');
	}else{
		const idCode = id.replace(/ /g,"");
		const pwCode = pw.replace(/ /g,"");
    		const agent = req.header('User-Agent');
		let link = `zoommtg://zoom.us/join?confno=${idCode}&pwd=${pwCode}`;  //PC
		if(agent.indexOf('Mobi')!=-1){
			link = `zoomus://zoom.us/join?confno=${idCode}&pwd=${pwCode}`;  //Mobile
		}
		res.send(`<html><head></head><body><a href="${link}">이동이 안되었다면 여기를 누르세요!</a><script>window.location.href = "${link}"</script><body></html>`);
	}
});

module.exports = router;
