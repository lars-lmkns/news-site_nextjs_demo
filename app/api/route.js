
export function GET(request) {
    console.log(request);
    return Response.json({ message: 'Hello, world!' });
}
