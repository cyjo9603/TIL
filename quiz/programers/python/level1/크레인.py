def solution(board, moves):
    answer = 0
    basket = []

    for current in moves:
        index = findIndex(board, current - 1)

        if index == -1:
            continue
        value = board[index][current - 1]
        board[index][current - 1] = 0
        if len(basket) > 0 and basket[-1] == value:
            answer += 2
            basket.pop()
            continue

        basket.append(value)

    return answer


def findIndex(board, line):
    for i in range(len(board)):
        if board[i][line] != 0:
            return i
    return -1


print(
    solution(
        [[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]],
        [1, 5, 3, 5, 1, 2, 1, 4],
    )
)
