
export default function get_saveLocalStorage(name, value) { 
    localStorage.setItem(name, JSON.stringify(value));
}