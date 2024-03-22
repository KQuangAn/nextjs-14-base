import Link from "next/link";
import { getAllPost } from "./action";
import { Post } from "./type";

const FormPage = async () => {
  const post = await getAllPost();

  return (
    <div>
      {post.map((item: Post) => (
        <div key={item.id} className=" w-full flex flex-col p-5 ">
          <div>id :{item.id}</div>
          <div>title :{item.title}</div>
          <div>body :{item.body}</div>
          <Link
            href={`/form/${item.id}/edit`}
            className="bg-red-400 w-20 h-10 flex items-center justify-center"
          >
            Edit this
          </Link>
        </div>
      ))}
    </div>
  );
};

export default FormPage;
