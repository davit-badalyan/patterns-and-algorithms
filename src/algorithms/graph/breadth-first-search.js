function Queue() {
  this.items = [];
}

Queue.prototype.enqueue = function (obj) {
  this.items.push(obj);
};

Queue.prototype.dequeue = function () {
  return this.items.shift();
};

Queue.prototype.isEmpty = function () {
  return this.items.length === 0;
};

function doBFS(graph, source) {
  let bfsInfo = [];

  for (let i = 0; i < graph.length; i++) {
    bfsInfo[i] = {
      distance: null,
      predecessor: null,
    };
  }

  bfsInfo[source].distance = 0;

  let queue = new Queue();
  queue.enqueue(source);

  while (!queue.isEmpty()) {
    let prev = queue.dequeue();
    for (let item = 0; item < graph[prev].length; item++) {
      let vertex = graph[prev][item];

      if (bfsInfo[vertex].distance === null) {
        bfsInfo[vertex].distance = bfsInfo[prev].distance + 1;
        bfsInfo[vertex].predecessor = prev;
        queue.enqueue(vertex);
      }
    }
  }

  return bfsInfo;
}

const adjList = [[1], [0, 4, 5], [3, 4, 5], [2, 6], [1, 2], [1, 2, 6], [3, 5], []];

var bfsInfo = doBFS(adjList, 3);
for (var i = 0; i < adjList.length; i++) {
  console.log("vertex " + i + ": distance = " + bfsInfo[i].distance + ", predecessor = " + bfsInfo[i].predecessor);
}
