# Implement a decorator that cashes the return values of a afunction, so that when it's called with the same arguments, the cashed value is returned 
# instead of re-executing the function.

def cashe(func):
    cashe_value = {}
    print(cashe_value)
    def wrapper(*args,**kwargs):
        if args in cashe_value:
            return cashe_value[args]
        result = func(*args,**kwargs)
        cashe_value[args] = result
        return result
    return wrapper

@cashe
def long_running_function(a,b):
    time.sleep(4)
    return a + b

print(long_running_function(2,3))
print(long_running_function(2,3))
