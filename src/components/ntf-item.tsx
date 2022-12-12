export default function nftItem(props: any) {
  return (
    <div className=" bg-amber-400 rounded">
      <a
        data-testid="url"
        href={props.url}
        className="font-bold underline text-white"
      >
        <span data-testid="name">{props.name}</span>
        <img data-testid="image" src={props.image} alt="" />
      </a>
    </div>
  );
}
