export default function Page({ params }) {
    return <div className="h-screen">My Post: {params.slug}</div>
  }