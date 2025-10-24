import Header4 from "@/components/headers/Header4";
import Header4Bold from "@/components/headers/Header4Bold";

function MegaMenu({ itemsData }: { itemsData: any }) {
  return (
    <div className="nav-mega-menu absolute top-16 left-1/2 z-10 hidden -translate-x-1/2 bg-transparent pt-9 group-hover:block">
      <div className="flex bg-white py-10">
        {itemsData.map((column: any, index: number) => (
          <div
            key={index}
            className={`flex w-62 flex-col gap-y-10 px-10 ${index != itemsData.length - 1 ? "border-r-2 border-gray-200" : ""}`}
          >
            {column.map((group: any, index: number) => (
              <div className="" key={index}>
                {/* <div className={`pb-4 font-bold`}>{group.title}</div> */}
                <Header4Bold text={group.title}/>
                <div className="flex flex-col gap-4">
                  {group.list.map((item: string, index: number) => (
                    <div key={index}>{item}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MegaMenu;
