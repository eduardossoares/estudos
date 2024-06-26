"use strict";
const leftForDeadDLC = {
    id: "90",
    title: "First DLC",
    description: "New Maps Releases",
    platform: ["PS4", "Xbox One", "PC"],
    newMap: ["Catalunia Map"],
};
const leftForDead = {
    id: "1",
    title: "Left4Dead",
    description: "Shooter and zombies game",
    platform: ["PS4", "Xbox One", "PC"],
    dlc: leftForDeadDLC
};
console.log(leftForDead);
