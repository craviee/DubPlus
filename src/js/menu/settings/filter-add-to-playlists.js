import { h } from "preact";
import { MenuSwitch } from "@/components/menuItems.js";
import dtproxy from "@/utils/DTProxy.js";

function handleKeyup(e) {
  if (e.target.id === 'playlist-input') {
    let list = dtproxy.grabPlaylists();
    list.forEach(function(li){
      let check = li.textContent.indexOf(e.target.value) >= 0;
      li.style.display = check ? 'block' : 'none';
    });
  }
}

function turnOn() {
  // the playlist is part of a DOM element that gets added and removed so we 
  // can't bind directly to it, we need to use delegation.
  document.body.addEventListener("keyup", handleKeyup);
}

function turnOff() {
  document.body.removeEventListener("keyup", handleKeyup);
}

const filterAddToPlaylists = function() {
  return (
    <MenuSwitch
      id="dubplus-playlist-filter"
      section="Settings"
      menuTitle="Filter playlists in grabs"
      desc="Adds 'filter as you type' functionality to the 'create a new playlist' input inside the grab to playlist popup"
      turnOn={turnOn}
      turnOff={turnOff}
    />
  );
};

export default filterAddToPlaylists;
