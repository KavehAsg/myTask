'use client';

// components
import { Button, useDisclosure } from "@heroui/react";
import Modal from "./Modal";

// icons
import { IoSearch } from "react-icons/io5";


export default function SearchInput({ state, searchHandler }) {

    const { searchValue, setSearchValue } = state;
    const { isOpen, onOpenChange, onOpen } = useDisclosure();

    return (
        <div>

            <Button size="sm" isIconOnly aria-label="search" onPress={onOpen} className=" navbarBtn ">
                <IoSearch className="navbarIcon" />
            </Button>


            <Modal disclosure={{ isOpen, onOpenChange }} action={searchHandler} title={"Search Orders"}>
                <div className="flex flex-col gap-2">
                    <input
                        type="text"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        placeholder="Type to search..."
                        className="border p-2 rounded"
                    />
                    <Button
                        className="w-fit rounded-md mx-auto my-2"
                        onPress={() => {
                            console.log("search")
                        }}
                    >
                        Search
                    </Button>
                </div>
            </Modal>

        </div>

    )
}
