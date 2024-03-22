import { Button } from "@/components/ui/button";
import { addPost, getPost } from "../../action";

export default async function EditPage({ params }: { params: { id: number } }) {
  const post = await getPost(params.id);
  console.log("i am in server side")
  const addPostWithId = addPost.bind(null, params.id); //You can pass additional arguments to a Server Action using the JavaScript bind method.
  
  
  return (
    <div>
      <form action={addPostWithId} className="flex flex-col w-full">
        <label htmlFor="title">Title:</label>
        <input type="text" name="title" defaultValue={post?.title} />
        <label htmlFor="body">Body:</label>
        <input type="text" name="body" defaultValue={post?.body} />
        <Button type="submit">Submit</Button>
      </form>
      {/* An alternative is to pass arguments as hidden input fields in the form
       (e.g. <input type="hidden" name="userId" value={userId} />).
        However, the value will be part of the rendered HTML and will not be encoded. */}
    </div>
  );
}
