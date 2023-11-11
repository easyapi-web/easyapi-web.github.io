# mdoc.class.filter

- Used to select which classes can export method (rpc) documentation, based on the current project situation.


***Demo***
 
 - If all RPC interface classes end with `Client`, you can configure it as follows:
 
 ```properties
 mdoc.class.filter=groovy:it.name().endsWith("Client")
 ```

- If all RPC interface classes are contained within package `a.b.c.client`, you can configure it as follows:
 
 ```properties
 mdoc.class.filter=groovy:it.name().startsWith("a.b.c.client")
 ```