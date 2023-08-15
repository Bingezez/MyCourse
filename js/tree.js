const tree1 = () => "tree1"
const tree2 = () => "tree2"
const tree3 = () => "tree3"
const tree4 = () => "tree4"
const tree5 = () => "tree5"
const tree6 = () => "tree6"
const tree7 = () => "tree7"
const tree8 = () => "tree8"
const tree9 = () => "tree9"
const tree10 = () => "tree10"

const TreeAnimation = () => {
    // sipmle code
    // ...

    // list tree
    const listTree = {
        1: tree1(),
        2: tree2(),
        3: tree3(),
        4: tree4(),
        5: tree5(),
        6: tree6(),
        7: tree7(),
        8: tree8(),
        9: tree9(),
        10: tree10()
    };

    let i = 1;
    const interval = setInterval(() => {
        console.log(listTree[i]);
        i++;
        i = i > 10 ? 1 : i;
    }, 1000);

    while (true) {
        // ...
        console.log(i);
    }
}

TreeAnimation();