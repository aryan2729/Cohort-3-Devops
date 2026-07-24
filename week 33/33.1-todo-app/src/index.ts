
const main: ExportedHandler<Env> = {

	// what cloudflare worker runtime sends the request to
	fetch(request, env, ctx): Response{

		return Response.json({
			message: "hello world 2  "
		})
 
	},
	// CoudFlare workers don't have this app.get("/user", ) express thing 
	// so we will use Hono which is framework like express that are able to   
	// work in cloudflare worker thing ( 33.15-code )

}

export default main;
