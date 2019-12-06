
$('.desc').hide();


// COLUMN CLICK STUFF

$('.bigboy').mousedown(function(){
	$('.case').css({'grid-template-columns':'4rem 1fr 1fr 1fr 1fr 1fr 1fr 4rem'});
	$('.title.a').css({'font-family':'Basis','font-size':'1rem','line-height':'1rem','margin-top':'0rem','text-transform':'capitalize'})	
	$('.title.b').css({'font-family':'Basis','font-size':'1rem','line-height':'1rem','margin-top':'0rem','text-transform':'capitalize'})
	$('.title.c').css({'font-family':'Basis','font-size':'1rem','line-height':'1rem','margin-top':'0rem','text-transform':'capitalize'})
	$('.title.d').css({'font-family':'Basis','font-size':'1rem','line-height':'1rem','margin-top':'0rem','text-transform':'capitalize'})
	$('.title.e').css({'font-family':'Basis','font-size':'1rem','line-height':'1rem','margin-top':'0rem','text-transform':'capitalize'})
	$('.title.f').css({'font-family':'Basis','font-size':'1rem','line-height':'1rem','margin-top':'0rem','text-transform':'capitalize'})
	
	$('.desc.a').hide();
	$('.desc.b').hide();
	$('.desc.c').hide();
	$('.desc.d').hide();
	$('.desc.e').hide();
	$('.desc.f').hide();
})

$('.shelf.a').mousedown(function(){
	$('.case').css({'grid-template-columns':'4rem 50% 1fr 1fr 1fr 1fr 1fr 4rem'});
	$('.title.a').css({'font-family':'Ribes','font-size':'4rem','line-height':'4rem','margin-top':'1rem','text-transform':'uppercase'})	
	$('.title.b').css({'font-family':'Basis','font-size':'1rem','line-height':'1rem','margin-top':'0rem','text-transform':'capitalize'})
	$('.title.c').css({'font-family':'Basis','font-size':'1rem','line-height':'1rem','margin-top':'0rem','text-transform':'capitalize'})
	$('.title.d').css({'font-family':'Basis','font-size':'1rem','line-height':'1rem','margin-top':'0rem','text-transform':'capitalize'})
	$('.title.e').css({'font-family':'Basis','font-size':'1rem','line-height':'1rem','margin-top':'0rem','text-transform':'capitalize'})
	$('.title.f').css({'font-family':'Basis','font-size':'1rem','line-height':'1rem','margin-top':'0rem','text-transform':'capitalize'})
	
	$('.desc.a').show();
	$('.desc.b').hide();
	$('.desc.c').hide();
	$('.desc.d').hide();
	$('.desc.e').hide();
	$('.desc.f').hide();
})

$('.shelf.b').mousedown(function(){
	$('.case').css({'grid-template-columns':'4rem 1fr 50% 1fr 1fr 1fr 1fr 4rem'})
	$('.title.a').css({'font-family':'Basis','font-size':'1rem','line-height':'1rem','margin-top':'0rem','text-transform':'capitalize'})
	$('.title.b').css({'font-family':'Ribes','font-size':'4rem','line-height':'4rem','margin-top':'1rem','text-transform':'uppercase'})
	$('.title.c').css({'font-family':'Basis','font-size':'1rem','line-height':'1rem','margin-top':'0rem','text-transform':'capitalize'})
	$('.title.d').css({'font-family':'Basis','font-size':'1rem','line-height':'1rem','margin-top':'0rem','text-transform':'capitalize'})
	$('.title.e').css({'font-family':'Basis','font-size':'1rem','line-height':'1rem','margin-top':'0rem','text-transform':'capitalize'})
	$('.title.f').css({'font-family':'Basis','font-size':'1rem','line-height':'1rem','margin-top':'0rem','text-transform':'capitalize'})
	
	$('.desc.a').hide();
	$('.desc.b').show();
	$('.desc.c').hide();
	$('.desc.d').hide();
	$('.desc.e').hide();
	$('.desc.f').hide();
})

$('.shelf.c').mousedown(function(){
	$('.case').css({'grid-template-columns':'4rem 1fr 1fr 50% 1fr 1fr 1fr 4rem'})
	$('.title.a').css({'font-family':'Basis','font-size':'1rem','line-height':'1rem','margin-top':'0rem','text-transform':'capitalize'})
	$('.title.b').css({'font-family':'Basis','font-size':'1rem','line-height':'1rem','margin-top':'0rem','text-transform':'capitalize'})
	$('.title.c').css({'font-family':'Ribes','font-size':'4rem','line-height':'4rem','margin-top':'1rem','text-transform':'uppercase'})
	$('.title.d').css({'font-family':'Basis','font-size':'1rem','line-height':'1rem','margin-top':'0rem','text-transform':'capitalize'})
	$('.title.e').css({'font-family':'Basis','font-size':'1rem','line-height':'1rem','margin-top':'0rem','text-transform':'capitalize'})
	$('.title.f').css({'font-family':'Basis','font-size':'1rem','line-height':'1rem','margin-top':'0rem','text-transform':'capitalize'})
	
	$('.desc.a').hide();
	$('.desc.b').hide();
	$('.desc.c').show();
	$('.desc.d').hide();
	$('.desc.e').hide();
	$('.desc.f').hide();
})

$('.shelf.d').mousedown(function(){
	$('.case').css({'grid-template-columns':'4rem 1fr 1fr 1fr 50% 1fr 1fr 4rem'})
	$('.title.a').css({'font-family':'Basis','font-size':'1rem','line-height':'1rem','margin-top':'0rem','text-transform':'capitalize'})
	$('.title.b').css({'font-family':'Basis','font-size':'1rem','line-height':'1rem','margin-top':'0rem','text-transform':'capitalize'})
	$('.title.c').css({'font-family':'Basis','font-size':'1rem','line-height':'1rem','margin-top':'0rem','text-transform':'capitalize'})
	$('.title.d').css({'font-family':'Ribes','font-size':'4rem','line-height':'4rem','margin-top':'1rem','text-transform':'uppercase'})
	$('.title.e').css({'font-family':'Basis','font-size':'1rem','line-height':'1rem','margin-top':'0rem','text-transform':'capitalize'})
	$('.title.f').css({'font-family':'Basis','font-size':'1rem','line-height':'1rem','margin-top':'0rem','text-transform':'capitalize'})
	
	$('.desc.a').hide();
	$('.desc.b').hide();
	$('.desc.c').hide();
	$('.desc.d').show();
	$('.desc.e').hide();
	$('.desc.f').hide();
})

$('.shelf.e').mousedown(function(){
	$('.case').css({'grid-template-columns':'4rem 1fr 1fr 1fr 1fr 50% 1fr 4rem'})
	$('.title.a').css({'font-family':'Basis','font-size':'1rem','line-height':'1rem','margin-top':'0rem','text-transform':'capitalize'})
	$('.title.b').css({'font-family':'Basis','font-size':'1rem','line-height':'1rem','margin-top':'0rem','text-transform':'capitalize'})
	$('.title.c').css({'font-family':'Basis','font-size':'1rem','line-height':'1rem','margin-top':'0rem','text-transform':'capitalize'})
	$('.title.d').css({'font-family':'Basis','font-size':'1rem','line-height':'1rem','margin-top':'0rem','text-transform':'capitalize'})
	$('.title.e').css({'font-family':'Ribes','font-size':'4rem','line-height':'4rem','margin-top':'1rem','text-transform':'uppercase'})
	$('.title.f').css({'font-family':'Basis','font-size':'1rem','line-height':'1rem','margin-top':'0rem','text-transform':'capitalize'})
	
	$('.desc.a').hide();
	$('.desc.b').hide();
	$('.desc.c').hide();
	$('.desc.d').hide();
	$('.desc.e').show();
	$('.desc.f').hide();
})

$('.shelf.f').mousedown(function(){
	$('.case').css({'grid-template-columns':'4rem 1fr 1fr 1fr 1fr 1fr 50% 4rem'})
	$('.title.a').css({'font-family':'Basis','font-size':'1rem','line-height':'1rem','margin-top':'0rem','text-transform':'capitalize'})
	$('.title.b').css({'font-family':'Basis','font-size':'1rem','line-height':'1rem','margin-top':'0rem','text-transform':'capitalize'})
	$('.title.c').css({'font-family':'Basis','font-size':'1rem','line-height':'1rem','margin-top':'0rem','text-transform':'capitalize'})
	$('.title.d').css({'font-family':'Basis','font-size':'1rem','line-height':'1rem','margin-top':'0rem','text-transform':'capitalize'})
	$('.title.e').css({'font-family':'Basis','font-size':'1rem','line-height':'1rem','margin-top':'0rem','text-transform':'capitalize'})
	$('.title.f').css({'font-family':'Ribes','font-size':'4rem','line-height':'4rem','margin-top':'1rem','text-transform':'uppercase'})
	
	$('.desc.a').hide();
	$('.desc.b').hide();
	$('.desc.c').hide();
	$('.desc.d').hide();
	$('.desc.e').hide();
	$('.desc.f').show();
})