"use client";
import { Menu } from "@ark-ui/react";
import { useState } from "react";
import { css } from "../../styled-system/css";
import { MySlider } from "./slider";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className={css({ fontSize: "2xl", fontWeight: "bold" })}>
        Hello 🐼!
      </div>
      <MySlider />
      <div
        className={css({
          display: "flex",
          flexDir: "row",
          justifyContent: "space-between",
        })}
      >
        <button onClick={() => setIsOpen(!isOpen)}>
          Trigger from the outside
        </button>

        <Menu.Root open={isOpen} onSelect={(id) => console.log(id)}>
          <Menu.Trigger className={css({ bg: "red.400" })}>
            Open menu
          </Menu.Trigger>
          <Menu.Positioner>
            <Menu.Content>
              <Menu.ItemGroup id="group-1">
                <Menu.ItemGroupLabel htmlFor="group-1">
                  Group 1
                </Menu.ItemGroupLabel>
                <Menu.Item id="share">Share...</Menu.Item>
                <Menu.Item id="move">Move...</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup id="group-2">
                <Menu.ItemGroupLabel htmlFor="group-2">
                  Group 2
                </Menu.ItemGroupLabel>
                <Menu.Item id="rename">Rename...</Menu.Item>
                <Menu.Item id="delete">Delete...</Menu.Item>
              </Menu.ItemGroup>
            </Menu.Content>
          </Menu.Positioner>
        </Menu.Root>
      </div>
    </div>
  );
}
