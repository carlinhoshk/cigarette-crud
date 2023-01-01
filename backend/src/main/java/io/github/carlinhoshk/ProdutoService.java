package io.github.carlinhoshk;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProdutoService {
    @Autowired
    private ProdutoRepository repo;

    public List<Produto> listAll(){
        return repo.findAll();
    }
    public void save(Produto produto){
        repo.save(produto);
    }

    public Produto get(Integer id){
        return repo.findById(id).get();
    }

    public void delete(Integer id){
        repo.deleteById(id);
    }
}
